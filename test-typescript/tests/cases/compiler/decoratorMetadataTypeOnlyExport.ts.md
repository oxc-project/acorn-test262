./a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 13,
      "end": 33,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 27,
          "end": 30,
          "exported": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
./b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 59,
            "decorators": [],
            "name": "Decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 59,
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 77,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 68,
              "end": 77,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 131,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 131,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 127,
                  "decorators": [],
                  "name": "par",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 124,
                      "end": 127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 127,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 80,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 90,
            "decorators": [],
            "name": "Decorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
