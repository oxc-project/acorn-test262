__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 16,
            "decorators": [],
            "name": "Namespace",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 44,
              "end": 63,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 48,
                "end": 61,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 57,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 61,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 37,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 37,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 20,
              "end": 35,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "member",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
