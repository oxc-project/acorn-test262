c:/root/src/file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 33,
        "raw": "\"./project/file2\"",
        "value": "./project/file2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 61,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 60,
        "raw": "\"module3\"",
        "value": "module3"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 44,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 95,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 93,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 93,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 87,
              "end": 93
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 112,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 100,
            "end": 111,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 100,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 102,
                "end": 109,
                "decorators": [],
                "name": "toFixed",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 131,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 130,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 118,
            "end": 129,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 118,
              "end": 127,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 127,
                "decorators": [],
                "name": "toFixed",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 117,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
c:/root/generated/src/project/file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "raw": "\"module1\"",
        "value": "module1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 63,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 62,
        "raw": "\"templates/module2\"",
        "value": "templates/module2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 96,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 85,
        "end": 95,
        "raw": "\"../file3\"",
        "value": "../file3"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 72,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 122,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 121,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 112,
              "end": 121,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 112,
                "end": 117,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
c:/shared/module1/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
c:/root/generated/src/templates/module2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
c:/root/src/file3/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
c:/node_modules/module3.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
