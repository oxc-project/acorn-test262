__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 23,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "foo",
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
          "start": 39,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 50,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 44,
              "end": 50
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 64,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 53,
            "end": 62,
            "argument": {
              "type": "Literal",
              "start": 60,
              "end": 62,
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 64,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 85,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 74,
            "end": 84,
            "callee": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 78,
                "end": 83,
                "value": "foo",
                "raw": "'foo'"
              }
            ],
            "optional": false
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
