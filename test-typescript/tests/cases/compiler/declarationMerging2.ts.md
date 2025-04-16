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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 75,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 42,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 33,
                "name": "_f",
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
                "start": 33,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                }
              },
              "accessibility": "protected"
            },
            {
              "type": "MethodDefinition",
              "start": 47,
              "end": 73,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "name": "getF",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 51,
                "end": 73,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "name": "_f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
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
      "attributes": [],
      "exportKind": "value"
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "run",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
