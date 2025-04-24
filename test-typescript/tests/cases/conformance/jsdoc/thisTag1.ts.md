__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 191,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 104,
      "end": 150,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 150,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 148,
            "argument": {
              "type": "BinaryExpression",
              "start": 131,
              "end": 148,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 131,
                "end": 137,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 131,
                  "end": 135
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 140,
                "end": 148,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 116,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 162,
            "end": 181,
            "properties": [
              {
                "type": "Property",
                "start": 168,
                "end": 169,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 175,
                "end": 179,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 178,
                  "end": 179,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 191,
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 190,
            "raw": "'hi'",
            "value": "hi"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 182,
          "end": 185,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
