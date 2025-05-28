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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 107,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 100,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 102,
                        "end": 105
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
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
  "end": 120,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 51,
          "object": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 54,
          "end": 119,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 65,
            "decorators": [],
            "name": "Chunk",
            "optional": false,
            "typeAnnotation": null
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 66,
            "end": 119,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 72,
                "end": 117,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 83,
                  "end": 117,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 86,
                    "end": 117,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 96,
                        "end": 111,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 96,
                          "end": 110,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 96,
                            "end": 106,
                            "object": {
                              "type": "ThisExpression",
                              "start": 96,
                              "end": 100
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 106,
                              "decorators": [],
                              "name": "chunk",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 109,
                            "end": 110,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null
              }
            ]
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 102,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 101,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 101,
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 132,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 131,
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
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 121,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 130,
                "value": "./mod1",
                "raw": "\"./mod1\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 156,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 165,
      "expression": {
        "type": "MemberExpression",
        "start": 157,
        "end": 164,
        "object": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 159,
          "end": 164,
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
