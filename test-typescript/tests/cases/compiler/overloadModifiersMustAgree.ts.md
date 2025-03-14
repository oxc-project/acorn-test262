overloadModifiersMustAgree.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 103,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 29,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 26,
              "end": 29,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 60,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "bar",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 52,
                      "end": 55
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 105,
      "end": 128,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 129,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 136,
        "end": 160,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 149,
            "end": 158,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 158,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 152,
                "end": 158
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 189,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 186,
        "end": 189,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 184,
          "decorators": [],
          "name": "s",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 184,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 178,
              "end": 184
            }
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 191,
      "end": 239,
      "body": {
        "type": "TSInterfaceBody",
        "start": 203,
        "end": 239,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 209,
            "end": 217,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 222,
            "end": 237,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 226,
                "end": 235,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 227,
                  "end": 235,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 229,
                    "end": 235
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
