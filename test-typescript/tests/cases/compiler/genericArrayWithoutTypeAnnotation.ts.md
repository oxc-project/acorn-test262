__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 20,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 20,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 71,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "decorators": [],
              "name": "getBar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 71,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 62,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 56,
                      "end": 62,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 56,
                        "end": 60,
                        "typeName": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 60,
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false
                        }
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
