__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "field3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 46,
            "raw": "\"field3\"",
            "value": "field3",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 186,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 63,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 63,
                "end": 70,
                "expression": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 70,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 93,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "AccessorProperty",
            "start": 103,
            "end": 142,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 103,
                "end": 110,
                "expression": {
                  "type": "CallExpression",
                  "start": 104,
                  "end": 110,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 108,
                      "end": 109,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 107,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 128,
              "end": 136,
              "raw": "\"field2\"",
              "value": "field2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 140,
              "end": 141,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "AccessorProperty",
            "start": 147,
            "end": 184,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 147,
                "end": 154,
                "expression": {
                  "type": "CallExpression",
                  "start": 148,
                  "end": 154,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 152,
                      "end": 153,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 151,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 182,
              "end": 183,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 301,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 301,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 207,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 229,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 232,
              "end": 233,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "StaticBlock",
            "start": 239,
            "end": 299,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 256,
                "end": 268,
                "directive": null,
                "expression": {
                  "type": "MemberExpression",
                  "start": 256,
                  "end": 267,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 256,
                    "end": 260
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 277,
                "end": 293,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 277,
                  "end": 292,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 288,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 277,
                      "end": 281
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 288,
                      "decorators": [],
                      "name": "field1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 291,
                    "end": 292,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 188,
          "end": 192,
          "expression": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
