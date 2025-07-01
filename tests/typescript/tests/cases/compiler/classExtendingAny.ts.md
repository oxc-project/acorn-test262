__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Err",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 47,
            "end": 62
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 78
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 91,
                        "end": 96
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 97,
                          "end": 98
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 99,
                          "end": 100
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 101,
                          "end": 102
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 103,
                          "end": 104
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 105,
                          "end": 106
                        },
                        {
                          "type": "Literal",
                          "value": 56,
                          "raw": "56",
                          "start": 107,
                          "end": 109
                        }
                      ],
                      "optional": false,
                      "start": 91,
                      "end": 110
                    },
                    "directive": null,
                    "start": 91,
                    "end": 110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unknown",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 132
                      },
                      "optional": false,
                      "computed": false,
                      "start": 119,
                      "end": 132
                    },
                    "directive": null,
                    "start": 119,
                    "end": 132
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "property": {
                        "type": "Literal",
                        "value": "unknown",
                        "raw": "'unknown'",
                        "start": 147,
                        "end": 156
                      },
                      "optional": false,
                      "computed": true,
                      "start": 141,
                      "end": 157
                    },
                    "directive": null,
                    "start": 141,
                    "end": 157
                  }
                ],
                "start": 81,
                "end": 163
              },
              "expression": false,
              "start": 78,
              "end": 163
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 67,
            "end": 163
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 195,
                        "end": 207
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "!",
                        "raw": "\"!\"",
                        "start": 210,
                        "end": 213
                      },
                      "start": 195,
                      "end": 213
                    },
                    "start": 188,
                    "end": 214
                  }
                ],
                "start": 178,
                "end": 220
              },
              "expression": false,
              "start": 175,
              "end": 220
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 220
          }
        ],
        "start": 41,
        "end": 222
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 222
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 229
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 252,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 258,
                            "end": 265
                          },
                          "optional": false,
                          "computed": false,
                          "start": 252,
                          "end": 265
                        },
                        "directive": null,
                        "start": 252,
                        "end": 265
                      }
                    ],
                    "start": 242,
                    "end": 271
                  },
                  "expression": false,
                  "start": 239,
                  "end": 271
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 271
              }
            ],
            "start": 232,
            "end": 273
          },
          "definite": false,
          "start": 228,
          "end": 273
        }
      ],
      "declare": false,
      "start": 224,
      "end": 273
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 273
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 19
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 37
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 50,
                        "end": 55
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 50,
                      "end": 57
                    },
                    "directive": null,
                    "start": 50,
                    "end": 57
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 66,
                          "end": 70
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 74
                        },
                        "optional": false,
                        "computed": false,
                        "start": 66,
                        "end": 74
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 77,
                        "end": 79
                      },
                      "start": 66,
                      "end": 79
                    },
                    "directive": null,
                    "start": 66,
                    "end": 79
                  }
                ],
                "start": 40,
                "end": 85
              },
              "expression": false,
              "start": 37,
              "end": 85
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 85
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 112
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 112
                    },
                    "directive": null,
                    "start": 104,
                    "end": 112
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 121,
                        "end": 125
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 129
                      },
                      "optional": false,
                      "computed": false,
                      "start": 121,
                      "end": 129
                    },
                    "directive": null,
                    "start": 121,
                    "end": 129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 138,
                        "end": 142
                      },
                      "property": {
                        "type": "Literal",
                        "value": "wot",
                        "raw": "'wot'",
                        "start": 143,
                        "end": 148
                      },
                      "optional": false,
                      "computed": true,
                      "start": 138,
                      "end": 149
                    },
                    "directive": null,
                    "start": 138,
                    "end": 149
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alsoBad",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 171
                    },
                    "directive": null,
                    "start": 158,
                    "end": 171
                  }
                ],
                "start": 94,
                "end": 177
              },
              "expression": false,
              "start": 91,
              "end": 177
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 177
          }
        ],
        "start": 20,
        "end": 179
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
