callOverloads5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 341,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 19,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 18,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 18,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 18,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 29,
      "end": 56,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 50,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 257,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 103,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 92,
              "end": 103,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 101,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 120,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 109,
              "end": 120,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 118,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 112,
                      "end": 118
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 161,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 161,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 137,
                "end": 161,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 135,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 132,
                      "end": 135
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 255,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 177,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 255,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 255,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 181,
                      "end": 184
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 289,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 292,
            "end": 306,
            "arguments": [
              {
                "type": "Literal",
                "start": 300,
                "end": 305,
                "raw": "\"hey\"",
                "value": "hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 323,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 322,
        "arguments": [
          {
            "type": "Literal",
            "start": 318,
            "end": 321,
            "raw": "\"a\"",
            "value": "a"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 310,
          "end": 317,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 310,
            "end": 312,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 313,
            "end": 317,
            "decorators": [],
            "name": "bar1",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 329,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 324,
          "end": 327,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 340,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 339,
        "arguments": [
          {
            "type": "Literal",
            "start": 335,
            "end": 338,
            "raw": "\"s\"",
            "value": "s"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 331,
          "end": 334,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
