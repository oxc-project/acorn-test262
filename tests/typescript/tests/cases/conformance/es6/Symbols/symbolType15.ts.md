__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 35
                },
                "typeArguments": null,
                "start": 29,
                "end": 35
              },
              "start": 27,
              "end": 35
            },
            "start": 21,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 35
        }
      ],
      "declare": false,
      "start": 17,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "symObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 44
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
        },
        "start": 38,
        "end": 50
      },
      "directive": null,
      "start": 38,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 55
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "symObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 64
        },
        "start": 52,
        "end": 64
      },
      "directive": null,
      "start": 52,
      "end": 65
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
