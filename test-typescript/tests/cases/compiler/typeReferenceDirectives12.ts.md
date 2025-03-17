__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Lib",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 19,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 17,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 26,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 24,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "start": 31,
  "end": 242,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 58,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 42,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 57,
        "value": "./main",
        "raw": "\"./main\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 59,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 59,
          "end": 76,
          "object": {
            "type": "MemberExpression",
            "start": 59,
            "end": 72,
            "object": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 63,
              "end": 72,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 79,
          "end": 111,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 90,
            "end": 111,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 92,
                "end": 109,
                "argument": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 108,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 241,
      "id": {
        "type": "Literal",
        "start": 128,
        "end": 136,
        "value": "./main",
        "raw": "\"./main\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 137,
        "end": 241,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 143,
            "end": 184,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 157,
              "end": 184,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 167,
                  "end": 178,
                  "key": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 170,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 174,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 177,
                        "name": "Lib",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 189,
            "end": 239,
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 203,
              "end": 239,
              "body": [
                {
                  "type": "TSDeclareFunction",
                  "start": 213,
                  "end": 233,
                  "id": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 225,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": null,
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 232,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 232,
                        "name": "Lib",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 138,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "value": "./main",
        "raw": "\"./main\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 46,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 45,
        "value": "./mod1",
        "raw": "\"./mod1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 71,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 55,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "name": "cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 107,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 107,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 91,
              "end": 106,
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 104,
                "object": {
                  "type": "NewExpression",
                  "start": 91,
                  "end": 100,
                  "callee": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "name": "Cls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 115,
        "end": 137,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 127,
              "end": 136,
              "callee": {
                "type": "MemberExpression",
                "start": 127,
                "end": 134,
                "object": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 130,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
