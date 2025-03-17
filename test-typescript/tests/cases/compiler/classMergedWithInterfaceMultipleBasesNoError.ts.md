__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 86,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 74,
          "end": 77,
          "expression": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 79,
          "end": 82,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 82,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 100,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 102,
      "end": 231,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 117,
        "end": 231,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 135,
          "end": 231,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 141,
              "end": 185,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 158,
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "start": 161,
                "end": 184,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 161,
                  "end": 165
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 184,
                  "decorators": [],
                  "name": "handleIntersection",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 190,
              "end": 229,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 217,
                "decorators": [],
                "name": "handleIntersection",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 220,
                "end": 229,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 226,
                  "end": 229,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
