__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 40,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 75,
                    "end": 81
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "value": 42,
                  "raw": "42"
                }
              }
            },
            "readonly": true,
            "static": true,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "value": "foo",
            "raw": "\"foo\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 102,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 111,
          "end": 112,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 126,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 128,
              "end": 133,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 137,
            "end": 139,
            "value": 42,
            "raw": "42"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 143,
          "end": 145,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 148,
            "end": 149,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 153,
          "end": 154,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 173,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 172,
              "value": 42,
              "raw": "42"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
