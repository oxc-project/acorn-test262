/node_modules/pkg/import.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 115,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 115,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 70,
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 70,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 68,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 62,
                    "decorators": [],
                    "name": "_i",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 64,
                      "end": 67
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 57,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 75,
            "end": 113,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
              "decorators": [],
              "name": "getInterI",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 112,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module"
}
```
/node_modules/pkg/require.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 117,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 117,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 71,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 71,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 69,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 63,
                    "decorators": [],
                    "name": "_r",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 65,
                      "end": 68
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 58,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false
            }
          },
          {
            "type": "TSDeclareFunction",
            "start": 76,
            "end": 115,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 94,
              "decorators": [],
              "name": "getInterR",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 114,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module"
}
```
/sub1/uses.ts
```json
{
  "type": "Program",
  "start": 46,
  "end": 73,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 46,
      "end": 73,
      "declaration": {
        "type": "CallExpression",
        "start": 61,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "getInterI",
          "optional": false
        },
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
/sub2/uses.ts
```json
{
  "type": "Program",
  "start": 46,
  "end": 73,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 46,
      "end": 73,
      "declaration": {
        "type": "CallExpression",
        "start": 61,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "getInterR",
          "optional": false
        },
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 53,
  "end": 166,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 86,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 70,
        "end": 86,
        "raw": "\"./sub1/uses.js\"",
        "value": "./sub1/uses.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 60,
          "end": 64,
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 64,
            "decorators": [],
            "name": "obj1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 120,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 120,
        "raw": "\"./sub2/uses.js\"",
        "value": "./sub2/uses.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 94,
          "end": 98,
          "local": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "obj2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 121,
      "end": 166,
      "declaration": {
        "type": "TSAsExpression",
        "start": 136,
        "end": 165,
        "expression": {
          "type": "ArrayExpression",
          "start": 136,
          "end": 156,
          "elements": [
            {
              "type": "Identifier",
              "start": 137,
              "end": 141,
              "decorators": [],
              "name": "obj1",
              "optional": false
            },
            {
              "type": "MemberExpression",
              "start": 143,
              "end": 155,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 143,
                "end": 147,
                "decorators": [],
                "name": "obj2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 155,
                "decorators": [],
                "name": "default",
                "optional": false
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 160,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 160,
            "end": 165,
            "decorators": [],
            "name": "const",
            "optional": false
          }
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
