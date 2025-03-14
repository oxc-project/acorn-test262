/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 35,
      "end": 56,
      "declaration": {
        "type": "Identifier",
        "start": 50,
        "end": 55,
        "decorators": [],
        "name": "types",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
/c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 30,
      "end": 51,
      "declaration": {
        "type": "Identifier",
        "start": 45,
        "end": 50,
        "decorators": [],
        "name": "types",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
/d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 39,
      "expression": {
        "type": "NewExpression",
        "start": 25,
        "end": 38,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 29,
          "end": 36,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 34,
            "decorators": [],
            "name": "types",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
/e.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "types",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 28,
          "raw": "'./b'",
          "value": "./b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 45,
      "expression": {
        "type": "NewExpression",
        "start": 31,
        "end": 44,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 35,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 35,
            "end": 40,
            "decorators": [],
            "name": "types",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
/f.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./b'",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 52,
      "expression": {
        "type": "NewExpression",
        "start": 30,
        "end": 51,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 34,
          "end": 49,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 34,
            "end": 47,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "types",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 40,
              "end": 47,
              "decorators": [],
              "name": "default",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
/g.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./c'",
        "value": "./c"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 43,
      "expression": {
        "type": "NewExpression",
        "start": 29,
        "end": 42,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "types",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
