interfaceExtendingClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 38,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 76,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "Z",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 70,
                    "argument": {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 81,
            "end": 101,
            "parameters": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 91,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 85,
                    "end": 91
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 125,
          "end": 128,
          "expression": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 142,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 150,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 153,
            "end": 156,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 167,
            "end": 172,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 167,
              "end": 170,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 180,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 183,
            "end": 186,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "Z",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 199,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 199,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "i",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
