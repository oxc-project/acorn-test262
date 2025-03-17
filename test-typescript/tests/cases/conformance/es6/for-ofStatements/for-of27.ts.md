__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 111,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 68,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 67,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 64,
                "end": 67
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ForOfStatement",
      "start": 72,
      "end": 111,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 77,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 81,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 86,
        "end": 106,
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 106,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 111,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
