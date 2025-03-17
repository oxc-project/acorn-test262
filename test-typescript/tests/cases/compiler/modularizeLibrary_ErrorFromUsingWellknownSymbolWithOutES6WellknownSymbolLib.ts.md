__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 47,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 41,
              "end": 47
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 108,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 77,
            "end": 106,
            "argument": {
              "type": "CallExpression",
              "start": 84,
              "end": 105,
              "callee": {
                "type": "MemberExpression",
                "start": 84,
                "end": 94,
                "object": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 89,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 94,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 104,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 120,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 112,
            "end": 113,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 115,
            "end": 116,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 118,
            "end": 119,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 144,
            "end": 154,
            "elements": [
              {
                "type": "Literal",
                "start": 145,
                "end": 148,
                "value": "c",
                "raw": "'c'"
              },
              {
                "type": "Literal",
                "start": 150,
                "end": 153,
                "value": "d",
                "raw": "'d'"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 156,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 158,
            "end": 183,
            "object": {
              "type": "Identifier",
              "start": 158,
              "end": 164,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 165,
              "end": 183,
              "name": "isConcatSpreadable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 187,
          "end": 192,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
