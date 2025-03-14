staticMismatchBecauseOfPrototype.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 81,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 46,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 65,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 61,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 63,
                        "end": 64,
                        "typeName": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 70,
                    "end": 79,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 77,
                        "end": 78,
                        "typeName": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 78,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
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
      "start": 84,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 115,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 112,
              "end": 114,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
