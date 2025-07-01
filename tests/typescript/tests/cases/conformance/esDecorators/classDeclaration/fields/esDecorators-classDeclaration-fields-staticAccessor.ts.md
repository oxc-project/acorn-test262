__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
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
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "field3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "init": {
            "type": "Literal",
            "value": "field3",
            "raw": "\"field3\"",
            "start": 38,
            "end": 46
          },
          "definite": false,
          "start": 29,
          "end": 46
        }
      ],
      "declare": false,
      "start": 23,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 67
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 68,
                      "end": 69
                    }
                  ],
                  "optional": false,
                  "start": 64,
                  "end": 70
                },
                "start": 63,
                "end": 70
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 93
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 96,
              "end": 97
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 63,
            "end": 98
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 107
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 108,
                      "end": 109
                    }
                  ],
                  "optional": false,
                  "start": 104,
                  "end": 110
                },
                "start": 103,
                "end": 110
              }
            ],
            "key": {
              "type": "Literal",
              "value": "field2",
              "raw": "\"field2\"",
              "start": 128,
              "end": 136
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 140,
              "end": 141
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 103,
            "end": 142
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 151
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 152,
                      "end": 153
                    }
                  ],
                  "optional": false,
                  "start": 148,
                  "end": 154
                },
                "start": 147,
                "end": 154
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field3",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 178
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 182,
              "end": 183
            },
            "computed": true,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 147,
            "end": 184
          }
        ],
        "start": 57,
        "end": 186
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 192
          },
          "start": 188,
          "end": 192
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 200
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 229
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 232,
              "end": 233
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 207,
            "end": 234
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 256,
                    "end": 260
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 267
                  },
                  "optional": false,
                  "computed": false,
                  "start": 256,
                  "end": 267
                },
                "directive": null,
                "start": 256,
                "end": 268
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
                      "start": 277,
                      "end": 281
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 288
                    },
                    "optional": false,
                    "computed": false,
                    "start": 277,
                    "end": 288
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 291,
                    "end": 292
                  },
                  "start": 277,
                  "end": 292
                },
                "directive": null,
                "start": 277,
                "end": 293
              }
            ],
            "start": 239,
            "end": 299
          }
        ],
        "start": 201,
        "end": 301
      },
      "abstract": false,
      "declare": false,
      "start": 188,
      "end": 301
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 301
}
```
