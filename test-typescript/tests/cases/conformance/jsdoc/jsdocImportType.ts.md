__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 37,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 43,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 40,
          "end": 43
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
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
      "type": "VariableDeclaration",
      "start": 71,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 107,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 91,
                "end": 107,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 93,
                    "end": 105,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 100,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 102,
                        "end": 105
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
  "start": 37,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 66,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 100,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 100,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 94,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 79,
                      "end": 93,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 79,
                        "end": 89,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 79,
                          "end": 83
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 89,
                          "decorators": [],
                          "name": "chunk",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 48,
        "decorators": [],
        "name": "Chunk",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 117,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 109,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 110,
            "end": 117,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 125,
          "decorators": [],
          "name": "Chunk",
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
  "start": 87,
  "end": 165,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 101,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 101,
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 131,
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 130,
                "raw": "\"./mod1\"",
                "value": "./mod1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 121,
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
      "type": "VariableDeclaration",
      "start": 150,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 165,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 157,
        "end": 164,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 159,
          "end": 164,
          "decorators": [],
          "name": "chunk",
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
