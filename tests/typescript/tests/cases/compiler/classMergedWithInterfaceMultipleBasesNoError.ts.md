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
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 100,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 102,
      "end": 231,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 117,
        "end": 231,
        "decorators": [],
        "id": null,
        "typeParameters": null,
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 135,
          "end": 231,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 141,
              "end": 185,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 158,
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "handleIntersection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 190,
              "end": 229,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 217,
                "decorators": [],
                "name": "handleIntersection",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 220,
                "end": 229,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 226,
                  "end": 229,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
