__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 41,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "Promise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 41,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 27,
              "end": 39,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
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
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 50,
  "end": 131,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 50,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "name": "WinJS",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 65,
        "end": 101,
        "expression": {
          "type": "Literal",
          "start": 73,
          "end": 100,
          "value": "./moduleInTypePosition1_0",
          "raw": "'./moduleInTypePosition1_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 129,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 121,
                "name": "w1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 121,
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 121,
                      "name": "WinJS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 126,
              "end": 129,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
