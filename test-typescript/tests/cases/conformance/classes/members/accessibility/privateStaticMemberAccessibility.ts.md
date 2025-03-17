__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 46,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 46,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 94,
              "end": 102,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 99,
                "end": 102,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 124,
              "end": 138,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 130,
                "end": 138,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 134,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 138,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 61,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
