__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 58,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 17,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 37,
              "decorators": [],
              "name": "ImportMeta",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 38,
              "end": 56,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 39,
                  "end": 55,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 45,
                      "end": 55,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 51,
                          "end": 55
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
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "IfStatement",
      "start": 61,
      "end": 106,
      "test": {
        "type": "MemberExpression",
        "start": 65,
        "end": 80,
        "object": {
          "type": "MetaProperty",
          "start": 65,
          "end": 76,
          "meta": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "meta",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 82,
        "end": 106,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 104,
            "expression": {
              "type": "CallExpression",
              "start": 86,
              "end": 103,
              "callee": {
                "type": "MemberExpression",
                "start": 86,
                "end": 101,
                "object": {
                  "type": "MetaProperty",
                  "start": 86,
                  "end": 97,
                  "meta": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 92,
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
