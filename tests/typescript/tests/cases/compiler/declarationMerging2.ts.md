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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 75,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 75,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 42,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "decorators": [],
                "name": "_f",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "protected"
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 73,
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
              "value": {
                "type": "FunctionExpression",
                "start": 51,
                "end": 73,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 63,
                          "end": 67
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 70,
                          "decorators": [],
                          "name": "_f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 73,
      "id": {
        "type": "Literal",
        "start": 25,
        "end": 30,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 73,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 37,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 49,
              "end": 71,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 59,
                  "end": 65,
                  "key": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 62,
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
