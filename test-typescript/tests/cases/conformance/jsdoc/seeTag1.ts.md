__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 48,
        "end": 101,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 99,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 61,
              "end": 99,
              "body": {
                "type": "TSInterfaceBody",
                "start": 75,
                "end": 99,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 93,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 88,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 88,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 90,
                        "end": 93,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 93,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 177,
            "end": 179,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 209,
            "end": 211,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
