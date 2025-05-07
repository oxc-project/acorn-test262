__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 101,
  "end": 144,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 127,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "good",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 116,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 142,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 129,
        "end": 142,
        "arguments": [
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 137,
            "end": 138,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 140,
            "end": 141,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 129,
          "end": 133,
          "decorators": [],
          "name": "good",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 107,
  "end": 146,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 132,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 134,
        "end": 146,
        "arguments": [
          {
            "type": "Literal",
            "start": 138,
            "end": 139,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 141,
            "end": 142,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 144,
            "end": 145,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 134,
          "end": 137,
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
