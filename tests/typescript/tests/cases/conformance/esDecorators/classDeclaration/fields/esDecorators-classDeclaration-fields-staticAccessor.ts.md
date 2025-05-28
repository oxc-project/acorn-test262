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
      "kind": "let",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 46,
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
            "value": "field3",
            "raw": "\"field3\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 186,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 186,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 63,
            "end": 98,
            "decorators": [
              {
                "type": "Decorator",
                "start": 63,
                "end": 70,
                "expression": {
                  "type": "CallExpression",
                  "start": 64,
                  "end": 70,
                  "callee": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 69,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 93,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 103,
            "end": 142,
            "decorators": [
              {
                "type": "Decorator",
                "start": 103,
                "end": 110,
                "expression": {
                  "type": "CallExpression",
                  "start": 104,
                  "end": 110,
                  "callee": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 107,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 108,
                      "end": 109,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 128,
              "end": 136,
              "value": "field2",
              "raw": "\"field2\""
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 140,
              "end": 141,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "AccessorProperty",
            "start": 147,
            "end": 184,
            "decorators": [
              {
                "type": "Decorator",
                "start": 147,
                "end": 154,
                "expression": {
                  "type": "CallExpression",
                  "start": 148,
                  "end": 154,
                  "callee": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 151,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 152,
                      "end": 153,
                      "value": 3,
                      "raw": "3"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 178,
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 182,
              "end": 183,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 301,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 301,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 207,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 229,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 232,
              "end": 233,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
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
                "expression": {
                  "type": "MemberExpression",
                  "start": 256,
                  "end": 267,
                  "object": {
                    "type": "ThisExpression",
                    "start": 256,
                    "end": 260
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 267,
                    "decorators": [],
                    "name": "field1",
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
                "start": 277,
                "end": 293,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 277,
                  "end": 292,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 277,
                    "end": 288,
                    "object": {
                      "type": "ThisExpression",
                      "start": 277,
                      "end": 281
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 288,
                      "decorators": [],
                      "name": "field1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 291,
                    "end": 292,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
