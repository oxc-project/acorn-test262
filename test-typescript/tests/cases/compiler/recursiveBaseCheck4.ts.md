__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 32,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 20,
        "end": 28,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 21,
            "end": 27
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 46,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 45,
        "object": {
          "type": "NewExpression",
          "start": 34,
          "end": 39,
          "callee": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "name": "blah",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
