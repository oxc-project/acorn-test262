__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 230,
  "end": 485,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "decorators": [],
            "name": "doc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 247,
                "end": 255,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 255,
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 257,
      "end": 276,
      "declaration": {
        "type": "Identifier",
        "start": 272,
        "end": 275,
        "decorators": [],
        "name": "doc",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 371,
      "end": 402,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 378,
        "end": 402,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 384,
            "end": 401,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 401,
              "decorators": [],
              "name": "blogPost",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 392,
                "end": 401,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 394,
                  "end": 401,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 401,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 404,
      "end": 484,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 411,
        "end": 484,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 450,
          "end": 484,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 456,
              "end": 482,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 456,
                "end": 473,
                "decorators": [],
                "name": "connectedCallback",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 473,
                "end": 482,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 475,
                  "end": 481,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 477,
                    "end": 481
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 417,
          "end": 429,
          "decorators": [],
          "name": "HTML5Element",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 438,
          "end": 449,
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null
        },
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
  "end": 41,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 12,
        "end": 15,
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 39,
        "raw": "\"./component.html\"",
        "value": "./component.html"
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
  "end": 181,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./file.js\"",
        "value": "./file.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 100,
        "arguments": [
          {
            "type": "Literal",
            "start": 63,
            "end": 81,
            "raw": "\"my-html5-element\"",
            "value": "my-html5-element"
          },
          {
            "type": "MemberExpression",
            "start": 83,
            "end": 99,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 87,
              "end": 99,
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 34,
          "end": 62,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 34,
            "end": 55,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 55,
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 62,
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 103,
      "end": 181,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 133,
        "end": 181,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 179,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 139,
              "end": 178,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 177,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 177,
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 139,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 139,
                  "end": 152,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 147,
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 152,
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 164,
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 131,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 120,
          "end": 131,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
