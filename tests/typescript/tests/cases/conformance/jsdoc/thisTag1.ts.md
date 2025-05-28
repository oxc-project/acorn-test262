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
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "left": {
                "type": "MemberExpression",
                "start": 131,
                "end": 137,
                "object": {
                  "type": "ThisExpression",
                  "start": 131,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 140,
                "end": 148,
                "object": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 181,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 181,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 175,
                "end": 179,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 178,
                  "end": 179,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 191,
        "callee": {
          "type": "MemberExpression",
          "start": 182,
          "end": 185,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 190,
            "value": "hi",
            "raw": "'hi'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
