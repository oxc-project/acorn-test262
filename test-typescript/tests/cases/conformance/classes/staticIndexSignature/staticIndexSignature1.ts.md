staticIndexSignature1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 70,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 41,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 46,
            "end": 68,
            "parameters": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 63,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  }
                }
              }
            ],
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 68,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 66,
                "end": 68,
                "literal": {
                  "type": "Literal",
                  "start": 66,
                  "end": 68,
                  "raw": "42",
                  "value": 42
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 84,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 72,
          "end": 80,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 74,
            "end": 79,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 83,
          "end": 84,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 85,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 108,
            "end": 116,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 110,
              "end": 115,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 122,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 119,
            "end": 121,
            "raw": "42",
            "value": 42
          }
        },
        "right": {
          "type": "Literal",
          "start": 125,
          "end": 127,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 132,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "raw": "2",
            "value": 2
          }
        },
        "right": {
          "type": "Literal",
          "start": 135,
          "end": 136,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 150,
            "end": 155,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "raw": "42",
              "value": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
