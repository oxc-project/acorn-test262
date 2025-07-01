__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 116
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 124,
        "end": 127
      },
      "expression": false,
      "start": 101,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 134,
            "end": 135
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 137,
            "end": 138
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 140,
            "end": 141
          }
        ],
        "optional": false,
        "start": 129,
        "end": 142
      },
      "directive": null,
      "start": 129,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 101,
  "end": 144
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 129,
        "end": 132
      },
      "expression": false,
      "start": 107,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 138,
            "end": 139
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 141,
            "end": 142
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 144,
            "end": 145
          }
        ],
        "optional": false,
        "start": 134,
        "end": 146
      },
      "directive": null,
      "start": 134,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 107,
  "end": 146
}
```
