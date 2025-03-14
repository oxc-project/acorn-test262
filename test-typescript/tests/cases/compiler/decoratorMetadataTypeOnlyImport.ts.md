__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 37,
        "raw": "'unknown-module'",
        "value": "unknown-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "List",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "List",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 46,
        "end": 73,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 57,
          "decorators": [],
          "name": "MyList",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 60,
          "end": 72,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 72,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "List",
            "optional": false
          }
        }
      },
      "exportKind": "type",
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
  "end": 109,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "MyList",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "MyList",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 62,
            "decorators": [],
            "name": "Decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 62,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 59,
                "end": 62
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 106,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 79,
                "end": 89,
                "expression": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "Decorator",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 96,
              "decorators": [],
              "name": "myList",
              "optional": false
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 105,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false
                }
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
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
