__ESTREE_TEST__:PASS:
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            },
            "readonly": false,
            "static": true,
            "accessibility": null
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
                  "value": 42,
                  "raw": "42"
                }
              }
            },
            "readonly": false,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 74,
            "end": 79,
            "value": "foo",
            "raw": "\"foo\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 83,
          "end": 84,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 116,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 108,
            "end": 116,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 110,
              "end": 115,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 119,
            "end": 121,
            "value": 42,
            "raw": "42"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 125,
          "end": 127,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 135,
          "end": 136,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 155,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 150,
            "end": 155,
            "object": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "value": 42,
              "raw": "42"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
