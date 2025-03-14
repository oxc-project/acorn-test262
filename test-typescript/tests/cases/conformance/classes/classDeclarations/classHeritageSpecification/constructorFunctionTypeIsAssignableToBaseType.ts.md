__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 57,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 29,
                "end": 57,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 39,
                    "end": 51,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 42,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 44,
                        "end": 50,
                        "typeName": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 50,
                          "decorators": [],
                          "name": "Object",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 146,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 144,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 116,
                "end": 144,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 126,
                    "end": 138,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 129,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 83,
        "end": 87,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 255,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 255,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 253,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 228,
                "end": 253,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 238,
                    "end": 247,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 241,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 241,
                      "end": 246,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 243,
                        "end": 246
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 162,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
