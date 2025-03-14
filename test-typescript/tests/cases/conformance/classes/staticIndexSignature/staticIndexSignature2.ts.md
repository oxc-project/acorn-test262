staticIndexSignature2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 88,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 14,
            "end": 50,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 40,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 40,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  }
                }
              }
            ],
            "readonly": true,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 55,
            "end": 86,
            "parameters": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 81,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 75,
                    "end": 81
                  }
                }
              }
            ],
            "readonly": true,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 86,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 84,
                "end": 86,
                "literal": {
                  "type": "Literal",
                  "start": 84,
                  "end": 86,
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
      "start": 90,
      "end": 102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 90,
          "end": 98,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "raw": "\"foo\"",
            "value": "foo"
          }
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 102,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 112,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 112,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 126,
            "end": 134,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 128,
              "end": 133,
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
      "start": 135,
      "end": 145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 135,
        "end": 145,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 135,
          "end": 140,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 137,
            "end": 139,
            "raw": "42",
            "value": 42
          }
        },
        "right": {
          "type": "Literal",
          "start": 143,
          "end": 145,
          "raw": "42",
          "value": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 146,
          "end": 150,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 148,
            "end": 149,
            "raw": "2",
            "value": 2
          }
        },
        "right": {
          "type": "Literal",
          "start": 153,
          "end": 154,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 173,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 173,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 172,
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
