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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 31,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 74,
          "end": 77,
          "expression": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 86,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 100,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 102,
      "end": 231,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 117,
        "end": 231,
        "id": null,
        "superClass": {
          "type": "Identifier",
          "start": 131,
          "end": 134,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 135,
          "end": 231,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 141,
              "end": 185,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 158,
                "name": "observer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "MemberExpression",
                "start": 161,
                "end": 184,
                "object": {
                  "type": "ThisExpression",
                  "start": 161,
                  "end": 165
                },
                "property": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 184,
                  "name": "handleIntersection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 190,
              "end": 229,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 217,
                "name": "handleIntersection",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 220,
                "end": 229,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 226,
                  "end": 229,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "typeAnnotation": null,
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
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
