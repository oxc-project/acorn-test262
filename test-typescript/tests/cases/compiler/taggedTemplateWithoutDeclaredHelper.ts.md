__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 36,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 34,
            "argument": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "id",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 45,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 51,
            "end": 76,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 57,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 60,
              "end": 76,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 63,
                "end": 76,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 63,
                    "end": 76,
                    "tail": true,
                    "value": {
                      "cooked": "hello world",
                      "raw": "hello world"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 60,
                "end": 62,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
