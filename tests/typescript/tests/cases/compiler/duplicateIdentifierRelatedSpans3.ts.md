__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "TopLevel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 112,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "duplicate1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 49,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 37,
                "end": 49,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 43,
                    "end": 49
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 65,
              "decorators": [],
              "name": "duplicate2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 79,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 67,
                "end": 79,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 110,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 95,
              "decorators": [],
              "name": "duplicate3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 109,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 97,
                "end": 109,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 103,
                    "end": 109
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
  "end": 100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "TopLevel",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 100,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 46,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "duplicate1",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 72,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 61,
              "decorators": [],
              "name": "duplicate2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 77,
            "end": 98,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 87,
              "decorators": [],
              "name": "duplicate3",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 91,
                "end": 97
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
