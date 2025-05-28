__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 48,
        "end": 101,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 99,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 61,
              "end": 99,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 75,
                "end": 99,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 85,
                    "end": 93,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 88,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 88,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 90,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 93,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 138,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 138,
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
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 179,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 179,
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
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 211,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 211,
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
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
