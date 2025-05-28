__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 273,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "Err",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 21,
      "end": 222,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 62,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 163,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 163,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 91,
                    "end": 110,
                    "expression": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 110,
                      "callee": {
                        "type": "Super",
                        "start": 91,
                        "end": 96
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 97,
                          "end": 98,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 101,
                          "end": 102,
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "start": 103,
                          "end": 104,
                          "value": 3,
                          "raw": "3"
                        },
                        {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "value": 4,
                          "raw": "4"
                        },
                        {
                          "type": "Literal",
                          "start": 107,
                          "end": 109,
                          "value": 56,
                          "raw": "56"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 132,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 132,
                      "object": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 132,
                        "decorators": [],
                        "name": "unknown",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 157,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 141,
                      "end": 157,
                      "object": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "property": {
                        "type": "Literal",
                        "start": 147,
                        "end": 156,
                        "value": "unknown",
                        "raw": "'unknown'"
                      },
                      "optional": false,
                      "computed": true
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
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 220,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 214,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 195,
                      "end": 213,
                      "left": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 207,
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 207,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 210,
                        "end": 213,
                        "value": "!",
                        "raw": "\"!\""
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 273,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 232,
            "end": 273,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 271,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 239,
                  "end": 271,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 242,
                    "end": 271,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 252,
                        "end": 265,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 265,
                          "object": {
                            "type": "Super",
                            "start": 252,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 265,
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
  "end": 179,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 179,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 85,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 57,
                    "expression": {
                      "type": "CallExpression",
                      "start": 50,
                      "end": 57,
                      "callee": {
                        "type": "Super",
                        "start": 50,
                        "end": 55
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 79,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 66,
                      "end": 79,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 66,
                        "end": 74,
                        "object": {
                          "type": "ThisExpression",
                          "start": 66,
                          "end": 70
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 74,
                          "decorators": [],
                          "name": "wat",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 77,
                        "end": 79,
                        "value": 12,
                        "raw": "12"
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
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 177,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 177,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 104,
                    "end": 112,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 112,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 112,
                        "decorators": [],
                        "name": "wat",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 129,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 121,
                      "end": 129,
                      "object": {
                        "type": "ThisExpression",
                        "start": 121,
                        "end": 125
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "wit",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 138,
                    "end": 149,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 138,
                      "end": 149,
                      "object": {
                        "type": "ThisExpression",
                        "start": 138,
                        "end": 142
                      },
                      "property": {
                        "type": "Literal",
                        "start": 143,
                        "end": 148,
                        "value": "wot",
                        "raw": "'wot'"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 158,
                    "end": 171,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 158,
                      "end": 171,
                      "object": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 171,
                        "decorators": [],
                        "name": "alsoBad",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
