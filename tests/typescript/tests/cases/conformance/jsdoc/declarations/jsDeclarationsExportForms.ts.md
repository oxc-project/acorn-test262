__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 19,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 19,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 25,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 21,
        "raw": "\"./cls\"",
        "value": "./cls"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"./func\"",
        "value": "./func"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 24,
      "end": 46,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 45,
        "raw": "\"./cls\"",
        "value": "./cls"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "\"./cls\"",
        "value": "./cls"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 40,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 38,
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "\"./cls\"",
        "value": "./cls"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 29,
      "end": 47,
      "declaration": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "\"./cls\"",
        "value": "./cls"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 41,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 37,
          "end": 39,
          "exported": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "\"./cls\"",
        "value": "./cls"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 61,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 38,
          "end": 58,
          "exported": {
            "type": "Identifier",
            "start": 44,
            "end": 58,
            "decorators": [],
            "name": "classContainer",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 26,
                "raw": "\"./cls\"",
                "value": "./cls"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 43,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 46,
          "end": 52,
          "properties": [
            {
              "type": "Property",
              "start": 48,
              "end": 50,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 26,
                "raw": "\"./cls\"",
                "value": "./cls"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 43,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 46,
          "end": 48,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 26,
                "raw": "\"./cls\"",
                "value": "./cls"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 46,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 29,
            "end": 43,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 29,
              "end": 35,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 49,
          "end": 51,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 11,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 26,
                "raw": "\"./cls\"",
                "value": "./cls"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 49,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 29,
            "end": 43,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 29,
              "end": 35,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "names",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 52,
          "end": 54,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 16,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 15,
        "raw": "\"./cjs4\"",
        "value": "./cjs4"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 17,
      "end": 33,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 32,
        "raw": "\"./cjs3\"",
        "value": "./cjs3"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 50,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 49,
        "raw": "\"./cjs2\"",
        "value": "./cjs2"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 66,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 65,
        "raw": "\"./cjs\"",
        "value": "./cjs"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 82,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 81,
        "raw": "\"./bol\"",
        "value": "./bol"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 83,
      "end": 98,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 97,
        "raw": "\"./ban\"",
        "value": "./ban"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 114,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 113,
        "raw": "\"./bat\"",
        "value": "./bat"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 115,
      "end": 130,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 122,
        "end": 129,
        "raw": "\"./baz\"",
        "value": "./baz"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 131,
      "end": 146,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 138,
        "end": 145,
        "raw": "\"./bar\"",
        "value": "./bar"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 147,
      "end": 163,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 154,
        "end": 162,
        "raw": "\"./bar2\"",
        "value": "./bar2"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
