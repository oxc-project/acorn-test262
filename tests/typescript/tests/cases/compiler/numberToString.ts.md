__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 21,
        "end": 28,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 22,
          "end": 28
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 76,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 35,
            "end": 44,
            "argument": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 78,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "decorators": [],
        "name": "f2",
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
          "start": 90,
          "end": 98,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 98,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 92,
              "end": 98
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 104,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 100,
          "end": 104
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 115,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 112,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 113,
            "end": 114,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 123,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 122,
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 119,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 120,
            "end": 121,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 164,
      "expression": {
        "type": "CallExpression",
        "start": 155,
        "end": 163,
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 158,
            "end": 162,
            "left": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "value": 3,
              "raw": "3"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 160,
              "end": 162,
              "value": "",
              "raw": "\"\""
            }
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
