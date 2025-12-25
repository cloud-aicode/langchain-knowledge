// 章节索引 - LangChain 1.0 完整教程
const chapters = [
    { id: 'index', title: '首页', file: 'index.html' },
    // 基础部分
    { id: 'quickstart', title: '快速入门', file: 'tutorials/01-quickstart.html', section: '基础知识' },
    // 核心部分
    { id: 'models', title: '模型模块', file: 'tutorials/02-models.html', section: '核心模块' },
    { id: 'prompts', title: '提示工程', file: 'tutorials/03-prompts.html', section: '核心模块' },
    { id: 'chains', title: '链式调用', file: 'tutorials/04-chains.html', section: '核心模块' },
    { id: 'tools', title: '工具系统', file: 'tutorials/05-tools.html', section: '核心模块' },
    { id: 'agents', title: '智能体', file: 'tutorials/06-agents.html', section: '核心模块' },
    // 数据处理
    { id: 'document-loaders', title: '文档加载', file: 'tutorials/07-document-loaders.html', section: '数据处理' },
    { id: 'text-splitters', title: '文本分割', file: 'tutorials/08-text-splitters.html', section: '数据处理' },
    { id: 'output-parsers', title: '输出解析', file: 'tutorials/09-output-parsers.html', section: '数据处理' },
    // 高级功能
    { id: 'memory', title: '记忆管理', file: 'tutorials/10-memory.html', section: '高级功能' },
    { id: 'embeddings', title: '嵌入向量', file: 'tutorials/11-embeddings.html', section: '高级功能' },
    { id: 'retrieval', title: 'RAG检索', file: 'tutorials/12-retrieval.html', section: '高级功能' },
    // 观测与评估
    { id: 'callbacks', title: '回调系统', file: 'tutorials/13-callbacks.html', section: '观测与评估' },
    { id: 'streaming', title: '流式处理', file: 'tutorials/14-streaming.html', section: '观测与评估' },
    { id: 'tracing', title: '链路追踪', file: 'tutorials/15-tracing.html', section: '观测与评估' },
    { id: 'evaluation', title: '评估框架', file: 'tutorials/16-evaluation.html', section: '观测与评估' },
    // 高级主题
    { id: 'langgraph', title: '图工作流', file: 'tutorials/17-langgraph.html', section: '高级主题' },
    // 最佳实践
    { id: 'best-practices', title: '最佳实践', file: 'tutorials/18-best-practices.html', section: '进阶内容' },
    // API 参考总目录
    { id: 'api-ref', title: 'API 参考', file: 'api-reference/index.html', section: 'API 参考' },
    // 核心 API
    { id: 'api-language-models', title: '语言模型', file: 'api-reference/language-models.html', section: 'API: 模型与提示' },
    { id: 'api-chat-models', title: '聊天模型', file: 'api-reference/chat-models.html', section: 'API: 模型与提示' },
    { id: 'api-prompts', title: '提示模板', file: 'api-reference/prompts.html', section: 'API: 模型与提示' },
    { id: 'api-chains', title: '链式调用', file: 'api-reference/chains.html', section: 'API: 核心组件' },
    { id: 'api-runnables', title: 'Runnable接口', file: 'api-reference/runnables.html', section: 'API: 核心组件' },
    { id: 'api-agents', title: '智能体', file: 'api-reference/agents.html', section: 'API: 核心组件' },
    { id: 'api-tools', title: '工具', file: 'api-reference/tools.html', section: 'API: 核心组件' },
    // 数据处理 API
    { id: 'api-document-loaders', title: '文档加载器', file: 'api-reference/document-loaders.html', section: 'API: 数据与检索' },
    { id: 'api-text-splitters', title: '文本分割器', file: 'api-reference/text-splitters.html', section: 'API: 数据与检索' },
    { id: 'api-embeddings', title: '嵌入模型', file: 'api-reference/embeddings.html', section: 'API: 数据与检索' },
    // 检索 API
    { id: 'api-vector-stores', title: '向量存储', file: 'api-reference/vector-stores.html', section: 'API: 数据与检索' },
    { id: 'api-retrievers', title: '检索器', file: 'api-reference/retrievers.html', section: 'API: 数据与检索' },
    { id: 'api-stores', title: '存储后端', file: 'api-reference/stores.html', section: 'API: 数据与检索' },
    // 状态管理 API
    { id: 'api-memory', title: '记忆管理', file: 'api-reference/memory.html', section: 'API: 状态与高级' },
    { id: 'api-checkpointers', title: '检查点', file: 'api-reference/checkpointers.html', section: 'API: 状态与高级' },
    // 输入输出 API
    { id: 'api-output-parsers', title: '输出解析器', file: 'api-reference/output-parsers.html', section: 'API: 模型与提示' },
    { id: 'api-document-transformers', title: '文档转换器', file: 'api-reference/document-transformers.html', section: 'API: 数据与检索' },
    // 监控评估 API
    { id: 'api-callbacks', title: '回调', file: 'api-reference/callbacks.html', section: 'API: 状态与高级' },
    { id: 'api-tracers', title: '追踪器', file: 'api-reference/tracers.html', section: 'API: 状态与高级' },
    { id: 'api-evaluators', title: '评估器', file: 'api-reference/evaluators.html', section: 'API: 状态与高级' },
    // 高级功能 API
    { id: 'api-langgraph', title: 'LangGraph', file: 'api-reference/langgraph.html', section: 'API: 状态与高级' }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initTheme();
    initCopyButtons();
    initExercises();
    initMermaid();
    initBackToTop();
});

// 初始化侧边栏
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const nav = document.querySelector('.sidebar-nav');
    if (!nav) return;

    const sections = {};

    const inApiRef = window.location.pathname.includes('/api-reference/');
    const inTutorials = window.location.pathname.includes('/tutorials/');

    // 获取当前页面的 body class 来确定是哪个章节
    let currentChapterId = null;
    document.body.classList.forEach(cls => {
        if (cls.startsWith('chapter-')) {
            // 只取第一个 chapter- 开头的 class
            if (currentChapterId === null) {
                currentChapterId = cls.replace('chapter-', '');
            }
        }
    });

    // 按章节分组
    chapters.forEach(chapter => {
        if (!chapter.section) return;
        if (!sections[chapter.section]) {
            sections[chapter.section] = [];
        }
        sections[chapter.section].push(chapter);
    });

    // 构建导航
    let navHTML = '';
    for (const [section, items] of Object.entries(sections)) {
        navHTML += `
            <div class="nav-section">
                <div class="nav-section-title">${section}</div>
        `;
        items.forEach(chapter => {
            const isActive = (chapter.id === currentChapterId);
            // 根据当前目录调整链接路径
            let href = chapter.file;

            if (inApiRef) {
                // 在 API 目录
                if (chapter.file.startsWith('api-reference/')) {
                    href = chapter.file.replace('api-reference/', '');
                } else {
                    href = '../' + chapter.file;
                }
            } else if (inTutorials) {
                // 在教程目录
                if (chapter.file.startsWith('tutorials/')) {
                    href = chapter.file.replace('tutorials/', '');
                } else {
                    href = '../' + chapter.file;
                }
            }
            // 根目录 (index.html) 不需要特殊处理，直接使用 chapter.file

            navHTML += `
                <a href="${href}" class="nav-item ${isActive ? 'active' : ''}" data-chapter="${chapter.id}">
                    ${chapter.title}
                </a>
            `;
        });
        navHTML += `</div>`;
    }

    nav.innerHTML = navHTML;

    // 优化的滚动逻辑
    const savedScrollTop = sessionStorage.getItem('sidebarScrollTop');

    if (savedScrollTop) {
        // 1. 如果有保存的位置，直接恢复
        nav.scrollTop = parseInt(savedScrollTop);
    } else {
        // 2. 如果没有保存位置（首次访问），滚动到激活项并居中
        // 使用 setTimeout 确保 DOM 渲染完成
        setTimeout(() => {
            const activeItem = nav.querySelector('.nav-item.active');
            if (activeItem) {
                activeItem.scrollIntoView({ block: 'center', behavior: 'auto' });
            }
        }, 0);
    }

    // 标记已访问（虽然这个变量目前没有被用到逻辑判断中，保留以防后续需要）
    if (!sessionStorage.getItem('sidebarHasVisited')) {
        sessionStorage.setItem('sidebarHasVisited', 'true');
    }

    // 3. 实时保存滚动位置
    nav.addEventListener('scroll', () => {
        sessionStorage.setItem('sidebarScrollTop', nav.scrollTop.toString());
    });
}

// 主题切换
function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// 复制按钮
function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;

            try {
                await navigator.clipboard.writeText(code);
                btn.classList.add('copied');
                btn.textContent = '已复制!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.textContent = '复制';
                }, 2000);
            } catch (err) {
                // Fallback
                const textarea = document.createElement('textarea');
                textarea.value = code;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                btn.textContent = '已复制!';
                setTimeout(() => {
                    btn.textContent = '复制';
                }, 2000);
            }
        });
    });
}

// 练习题交互
function initExercises() {
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const parent = option.parentElement;
            const isCorrect = option.classList.contains('correct-option');

            // 清除之前的选择
            parent.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            option.classList.add('selected');

            // 显示答案
            if (isCorrect) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
                // 显示正确答案
                parent.querySelector('.correct-option').classList.add('correct');
            }
        });
    });
}

// 初始化 Mermaid
async function initMermaid() {
    if (typeof mermaid === 'undefined') return;

    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#fff',
            primaryBorderColor: '#1e40af',
            lineColor: '#64748b',
            secondaryColor: '#8b5cf6',
            tertiaryColor: '#f1f5f9',
            background: '#ffffff',
            mainBkg: '#f8fafc',
            nodeBorder: '#e2e8f0',
            clusterBkg: '#f1f5f9'
        }
    });
}

// 移动菜单
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// 回到顶部功能
function initBackToTop() {
    // 1. 创建按钮
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.title = '回到顶部';
    document.body.appendChild(btn);

    // 2. 监听滚动显示/隐藏
    const mainContent = document.querySelector('.main-content');
    const scrollTarget = mainContent || window;

    // 如果主要内容区域是滚动的（例如在某些布局中），监听它
    // 但通常是 window 滚动
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // 3. 点击事件
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
