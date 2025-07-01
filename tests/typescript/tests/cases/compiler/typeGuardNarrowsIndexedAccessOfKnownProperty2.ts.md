__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13,
                      "end": 16
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 19,
                        "end": 25
                      },
                      "start": 17,
                      "end": 25
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 13,
                    "end": 25
                  }
                ],
                "start": 11,
                "end": 27
              },
              "start": 9,
              "end": 27
            },
            "start": 6,
            "end": 27
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 30,
            "end": 32
          },
          "definite": false,
          "start": 6,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "key",
              "raw": "'key'",
              "start": 46,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "typeArguments": null,
              "start": 55,
              "end": 60
            },
            "start": 46,
            "end": 60
          },
          "definite": false,
          "start": 40,
          "end": 60
        }
      ],
      "declare": false,
      "start": 34,
      "end": 61
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 70
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 74
        },
        "optional": false,
        "computed": true,
        "start": 67,
        "end": 75
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 90
              },
              "optional": false,
              "computed": true,
              "start": 83,
              "end": 91
            },
            "directive": null,
            "start": 83,
            "end": 92
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 114
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 114
            },
            "directive": null,
            "start": 107,
            "end": 115
          }
        ],
        "start": 77,
        "end": 128
      },
      "alternate": null,
      "start": 63,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 128
}
```
