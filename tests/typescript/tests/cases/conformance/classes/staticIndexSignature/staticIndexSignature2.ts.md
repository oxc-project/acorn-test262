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
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "value": "foo",
            "raw": "\"foo\""
          },
          "optional": false,
          "computed": true
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
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 126,
            "end": 134,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 128,
              "end": 133,
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
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 137,
            "end": 139,
            "value": 42,
            "raw": "42"
          },
          "optional": false,
          "computed": true
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
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 148,
            "end": 149,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "computed": true
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 173,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 172,
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
