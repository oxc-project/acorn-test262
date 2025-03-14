labeledStatementWithLabel.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 24,
      "body": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 24,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 18,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "params": []
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 5,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 25,
      "end": 51,
      "body": {
        "type": "FunctionDeclaration",
        "start": 32,
        "end": 51,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 48,
          "end": 51,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": true,
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "gen",
          "optional": false
        },
        "params": []
      },
      "label": {
        "type": "Identifier",
        "start": 25,
        "end": 30,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 52,
      "end": 84,
      "body": {
        "type": "FunctionDeclaration",
        "start": 59,
        "end": 84,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 81,
          "end": 84,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 78,
          "decorators": [],
          "name": "gen1",
          "optional": false
        },
        "params": []
      },
      "label": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 85,
      "end": 101,
      "body": {
        "type": "TSEnumDeclaration",
        "start": 92,
        "end": 101,
        "body": {
          "type": "TSEnumBody",
          "start": 99,
          "end": 101,
          "members": []
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 102,
      "end": 123,
      "body": {
        "type": "TSInterfaceDeclaration",
        "start": 109,
        "end": 123,
        "body": {
          "type": "TSInterfaceBody",
          "start": 121,
          "end": 123,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "decorators": [],
          "name": "I",
          "optional": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 102,
        "end": 107,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 124,
      "end": 142,
      "body": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 142,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 139,
          "end": 142,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "label": {
        "type": "Identifier",
        "start": 124,
        "end": 129,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 143,
      "end": 160,
      "body": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 160,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 159,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "label": {
        "type": "Identifier",
        "start": 143,
        "end": 148,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 161,
      "end": 178,
      "body": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 178,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 177,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 176,
              "end": 177,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "label": {
        "type": "Identifier",
        "start": 161,
        "end": 166,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 179,
      "end": 198,
      "body": {
        "type": "VariableDeclaration",
        "start": 186,
        "end": 198,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 192,
            "end": 197,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "label": {
        "type": "Identifier",
        "start": 179,
        "end": 184,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 200,
      "end": 219,
      "body": {
        "type": "TSModuleDeclaration",
        "start": 207,
        "end": 219,
        "body": {
          "type": "TSModuleBlock",
          "start": 216,
          "end": 219,
          "body": []
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 215,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "kind": "module"
      },
      "label": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 220,
      "end": 241,
      "body": {
        "type": "TSModuleDeclaration",
        "start": 227,
        "end": 241,
        "body": {
          "type": "TSModuleBlock",
          "start": 239,
          "end": 241,
          "body": []
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "decorators": [],
          "name": "N",
          "optional": false
        },
        "kind": "namespace"
      },
      "label": {
        "type": "Identifier",
        "start": 220,
        "end": 225,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 242,
      "end": 260,
      "body": {
        "type": "TSTypeAliasDeclaration",
        "start": 249,
        "end": 260,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 255,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 258,
          "end": 260,
          "members": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 242,
        "end": 247,
        "decorators": [],
        "name": "label",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
