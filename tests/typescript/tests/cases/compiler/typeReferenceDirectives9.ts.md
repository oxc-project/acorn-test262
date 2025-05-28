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
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 26,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 24,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 63,
              "end": 72,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 79,
          "end": 111,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false
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
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Lib",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
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
                        "decorators": [],
                        "name": "Lib",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "body": null,
                  "expression": false
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
  "end": 137,
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
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 107,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 107,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Cls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 104,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 115,
        "end": 137,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 121,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
