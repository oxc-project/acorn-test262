__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 75,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 75,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 75,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 42,
              "accessibility": "protected",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "decorators": [],
                "name": "_f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 73,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "decorators": [],
                "name": "getF",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 51,
                "end": 73,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 54,
                  "end": 73,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 56,
                      "end": 71,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 63,
                        "end": 70,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 63,
                          "end": 67
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 70,
                          "decorators": [],
                          "name": "_f",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 73,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 73,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 37,
            "end": 71,
            "body": {
              "type": "TSInterfaceBody",
              "start": 49,
              "end": 71,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 59,
                  "end": 65,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 62,
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": null,
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
